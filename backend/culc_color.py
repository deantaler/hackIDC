from typing import List

import pandas as pd
from ast import literal_eval
import cv2
import imutils as imutils
import numpy as np
from imutils import contours

COLORS_CHECKER_ARR_ORIGIN = [[115, 82, 68], [194, 150, 130], [98, 122, 157], [87, 108, 67], [133, 128, 177],
                             [103, 189, 170],
                             [214, 126, 44], [80, 91, 166], [193, 90, 99], [94, 60, 108], [157, 188, 64],
                             [224, 163, 46],
                             [56, 61, 150], [70, 148, 73], [175, 54, 60], [231, 199, 31], [187, 86, 149], [8, 133, 161],
                             [243, 243, 242], [200, 200, 200], [160, 160, 160], [122, 122, 121], [85, 85, 85],
                             [52, 52, 52]]
colors_checker_arr = []


def photo_median(img):
    total_R = []
    total_G = []
    total_B = []

    for x in range(len(img)):
        for y in range(len(img[x])):
            total_R.append(img[x][y][2])
            total_G.append(img[x][y][1])
            total_B.append(img[x][y][0])

    return [int(np.median(total_R)), int(np.median(total_G)), int(np.median(total_B))]


def detect_squares_checker(img):
    # Convert image to grayscale
    h, w = img.shape[:2]
    offset_h = int(0.07 * h)
    square_h = int(0.10 * h)
    offset_w = int(0.05 * w)
    square_w = int(0.07 * w)

    image_number = 0
    for i in range(4):
        for j in range(6):
            ROI = img[i * int(h / 4) + offset_h: i * int(h / 4) + offset_h + square_h,
                  j * int(w / 6) + offset_w: j * int(w / 6) + offset_w + square_w]
            # cv2.imwrite('squares/ROI_{}.png'.format(image_number), ROI)

            colors_checker_arr.append(photo_median(ROI))
            image_number += 1


def get_RGB_lists(arr):
    r = []
    g = []
    b = []

    for i in arr:
        r.append(i[0])
        g.append(i[1])
        b.append(i[2])
    return r, g, b


def find_RGB(colors_checker_arr_origin, colors_checker_arr, photo_color):
    r_origin, g_origin, b_origin = get_RGB_lists(colors_checker_arr_origin)
    r_photo, g_photo, b_photo = get_RGB_lists(colors_checker_arr)

    f_r = np.polyfit(np.array(r_photo), np.array(r_origin), 1)
    f_g = np.polyfit(np.array(g_photo), np.array(g_origin), 1)
    f_b = np.polyfit(np.array(b_photo), np.array(b_origin), 1)
    # print(f_r)
    p_r = lambda x: f_r[0] * x + f_r[1]
    p_g = lambda x: f_g[0] * x + f_g[1]
    p_b = lambda x: f_b[0] * x + f_b[1]

    r = int(p_r(photo_color[0]))
    g = int(p_g(photo_color[1]))
    b = int(p_b(photo_color[2]))
    return r, g, b


def main(original_path, photo_path):
    img = cv2.imread(original_path, cv2.IMREAD_COLOR)
    color_test = cv2.imread(photo_path, cv2.IMREAD_COLOR)
    photo_med_color = photo_median(color_test)
    cv2.imshow('before', img)
    detect_squares_checker(img)
    print(f"colors_checker_arr: {colors_checker_arr}")

    print(photo_med_color)

    r, g, b = find_RGB(COLORS_CHECKER_ARR_ORIGIN, colors_checker_arr, photo_med_color)
    return (r, g, b)


# if _name_ =='_main_':
#     print(main('0887D_color_checker.png', '0887D.jpg'))

# cv2.waitKey(0)
# cv2.destroyAllWindows()

def get_distance(origin_rgb: (int, int, int), close_rgb: (int, int, int)):
    return (((origin_rgb[0] - close_rgb[0]) ** 2) + ((origin_rgb[1] - close_rgb[1]) ** 2) +
            ((origin_rgb[2] - close_rgb[2]) ** 2)) ** (1 / 2)


def get_n_closest(rgb: (int, int, int), n: int) -> List[dict]:
    fan_colors_df = pd.read_csv('fan_colors.csv')
    fan_colors_df['RGB_tuple'] = fan_colors_df['RGB'].apply(literal_eval)
    fan_colors_df['distance'] = fan_colors_df['RGB_tuple'].apply(get_distance, close_rgb=rgb)
    df = fan_colors_df.nsmallest(n, 'distance').reset_index()
    return df.to_dict('records')

# print(get_n_closest(rgb=(245, 236, 217), n=3))
# ee
