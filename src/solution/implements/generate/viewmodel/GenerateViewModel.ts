export abstract class GenerateViewModel {}

type StyleGroup = {
    align: {
        [key in Extract<
            keyof Style,
            'vertical_align' | 'horizontal_align'
        >]: Style[key];
    };
    font: {
        [key in Extract<
            keyof Style,
            | 'font_size'
            | 'font_weight'
            | 'font_family'
            | 'font_style'
            | 'font_color'
        >]: Style[key];
    };
};

type StyleKey =
    | 'vertical_align'
    | 'horizontal_align'
    | `font_${
          | 'size'
          | 'weight'
          | 'family'
          | 'style'
          | 'fore_color'
          | 'background_color'}`
    | `border_${'color' | 'width' | 'radius' | 'style'}`;

type StyleValue = {
    [K in StyleKey]: K extends `font_${string}`
        ? K extends 'font_size' | 'font_weight'
            ? number
            : string
        : K extends `border_${string}`
        ? K extends 'border_width' | 'border_radius'
            ? number
            : string
        : K extends 'vertical_align'
        ? 'top' | 'center' | 'bottom'
        : 'left' | 'center' | 'right';
};

type Style = {
    vertical_align: 'top' | 'center' | 'bottom';
    horizontal_align: 'left' | 'center' | 'right';
    font: {
        size: number;
        weight: number;
        family: string;
        style: string;
        fore_color: string;
        background_color: string;
    };
    border: {
        color: string;
        width: number;
        radius: number;
        style: string;
    };
    use_list: (keyof Style)[];
};

/**
 * Style 의 key 를 이용해 아래의 값을 허용할 수 있는 타입 정의해줘
 * vertical_align
 * horizontal_align
 * font_size
 * font_weight
 * font_family
 * font_style
 * font_fore_color
 * font_background_color
 * border_color
 * border_width
 * border_radius
 * border_style
 */
const c: Style = {
    vertical_align: 'top',
    horizontal_align: 'left',
    font: {
        size: 12,
        weight: 400,
        family: 'Arial',
        style: 'normal',
        fore_color: '#000000',
        background_color: '#FFFFFF',
    },
    border: {
        color: '#000000',
        width: 1,
        radius: 0,
        style: 'solid',
    },
    use_list: ['vertical_align'],
};
