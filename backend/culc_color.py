import pandas as pd
from ast import literal_eval


def get_distance(origin_rgb: (int, int, int), close_rgb: (int, int, int)):
    return (((origin_rgb[0] - close_rgb[0]) ** 2) + ((origin_rgb[1] - close_rgb[1]) ** 2) +
            ((origin_rgb[2] - close_rgb[2]) ** 2)) ** (1 / 2)


def get_n_closest(rgb: (int, int, int), n: int) -> pd.DataFrame:
    fan_colors_df = pd.read_csv('fan_colors.csv')
    fan_colors_df['RGB_tuple'] = fan_colors_df['RGB'].apply(literal_eval)
    fan_colors_df['distance'] = fan_colors_df['RGB_tuple'].apply(get_distance, close_rgb=rgb)
    return fan_colors_df.nsmallest(n, 'distance').reset_index()


# print(get_n_closest(rgb=(245, 236, 217), n=3))
# ee
