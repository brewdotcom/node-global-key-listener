import { IGlobalKeyLookup } from "../_types/IGlobalKeyLookup";

/*
 * Linux keycodes from `linux/input-event-codes.h`.[^1]
 * X11 keycodes equal linux + 8.[^2]
 * 
 * [^1]: https://github.com/torvalds/linux/blob/13bc32bad7059d6c5671e9d037e6e3ed001cc0f4/include/uapi/linux/input-event-codes.h#L75-L262
 * [^2]: https://github.com/freedesktop/xorg-xf86-input-evdev/blob/469a30f158edceda99fe8a086abbeefffa010e02/src/evdev.c#L280
 */
export const X11GlobalKeyLookup: IGlobalKeyLookup = {
    0: { _nameRaw: "KEY_RESERVED", name: "RESERVED", standardName: "" },
    1: { _nameRaw: "KEY_ESC", name: "ESCAPE", standardName: "ESCAPE" },
    2: { _nameRaw: "KEY_1", name: "1", standardName: "1" },
    3: { _nameRaw: "KEY_2", name: "2", standardName: "2" },
    4: { _nameRaw: "KEY_3", name: "3", standardName: "3" },
    5: { _nameRaw: "KEY_4", name: "4", standardName: "4" },
    6: { _nameRaw: "KEY_5", name: "5", standardName: "5" },
    7: { _nameRaw: "KEY_6", name: "6", standardName: "6" },
    8: { _nameRaw: "KEY_7", name: "7", standardName: "7" },
    9: { _nameRaw: "KEY_8", name: "8", standardName: "8" },
    10: { _nameRaw: "KEY_9", name: "9", standardName: "9" },
    11: { _nameRaw: "KEY_0", name: "0", standardName: "0" },
    12: { _nameRaw: "KEY_MINUS", name: "MINUS", standardName: "MINUS" },
    13: { _nameRaw: "KEY_EQUAL", name: "EQUALS", standardName: "EQUALS" },
    14: { _nameRaw: "KEY_BACKSPACE", name: "BACKSPACE", standardName: "BACKSPACE" },
    15: { _nameRaw: "KEY_TAB", name: "TAB", standardName: "TAB" },
    16: { _nameRaw: "KEY_Q", name: "Q", standardName: "Q" },
    17: { _nameRaw: "KEY_W", name: "W", standardName: "W" },
    18: { _nameRaw: "KEY_E", name: "E", standardName: "E" },
    19: { _nameRaw: "KEY_R", name: "R", standardName: "R" },
    20: { _nameRaw: "KEY_T", name: "T", standardName: "T" },
    21: { _nameRaw: "KEY_Y", name: "Y", standardName: "Y" },
    22: { _nameRaw: "KEY_U", name: "U", standardName: "U" },
    23: { _nameRaw: "KEY_I", name: "I", standardName: "I" },
    24: { _nameRaw: "KEY_O", name: "O", standardName: "O" },
    25: { _nameRaw: "KEY_P", name: "P", standardName: "P" },
    26: { _nameRaw: "KEY_LEFTBRACE", name: "LEFTBRACE", standardName: "SQUARE BRACKET OPEN" },
    27: { _nameRaw: "KEY_RIGHTBRACE", name: "RIGHTBRACE", standardName: "SQUARE BRACKET CLOSE" },
    28: { _nameRaw: "KEY_ENTER", name: "ENTER", standardName: "RETURN" },
    29: { _nameRaw: "KEY_LEFTCTRL", name: "LEFTCTRL", standardName: "LEFT CTRL" },
    30: { _nameRaw: "KEY_A", name: "A", standardName: "A" },
    31: { _nameRaw: "KEY_S", name: "S", standardName: "S" },
    32: { _nameRaw: "KEY_D", name: "D", standardName: "D" },
    33: { _nameRaw: "KEY_F", name: "F", standardName: "F" },
    34: { _nameRaw: "KEY_G", name: "G", standardName: "G" },
    35: { _nameRaw: "KEY_H", name: "H", standardName: "H" },
    36: { _nameRaw: "KEY_J", name: "J", standardName: "J" },
    37: { _nameRaw: "KEY_K", name: "K", standardName: "K" },
    38: { _nameRaw: "KEY_L", name: "L", standardName: "L" },
    39: { _nameRaw: "KEY_SEMICOLON", name: "SEMICOLON", standardName: "SEMICOLON" },
    40: { _nameRaw: "KEY_APOSTROPHE", name: "APOSTROPHE", standardName: "QUOTE" },
    41: { _nameRaw: "KEY_GRAVE", name: "GRAVE", standardName: "BACKTICK" },
    42: { _nameRaw: "KEY_LEFTSHIFT", name: "LEFTSHIFT", standardName: "LEFT SHIFT" },
    43: { _nameRaw: "KEY_BACKSLASH", name: "BACKSLASH", standardName: "BACKSLASH" },
    44: { _nameRaw: "KEY_Z", name: "Z", standardName: "Z" },
    45: { _nameRaw: "KEY_X", name: "X", standardName: "X" },
    46: { _nameRaw: "KEY_C", name: "C", standardName: "C" },
    47: { _nameRaw: "KEY_V", name: "V", standardName: "V" },
    48: { _nameRaw: "KEY_B", name: "B", standardName: "B" },
    49: { _nameRaw: "KEY_N", name: "N", standardName: "N" },
    50: { _nameRaw: "KEY_M", name: "M", standardName: "M" },
    51: { _nameRaw: "KEY_COMMA", name: "COMMA", standardName: "COMMA" },
    52: { _nameRaw: "KEY_DOT", name: "DOT", standardName: "DOT" },
    53: { _nameRaw: "KEY_SLASH", name: "SLASH", standardName: "FORWARD SLASH" },
    54: { _nameRaw: "KEY_RIGHTSHIFT", name: "RIGHTSHIFT", standardName: "RIGHT SHIFT" },
    55: { _nameRaw: "KEY_KPASTERISK", name: "KPASTERISK", standardName: "NUMPAD MULTIPLY" },
    56: { _nameRaw: "KEY_LEFTALT", name: "LEFTALT", standardName: "LEFT ALT" },
    57: { _nameRaw: "KEY_SPACE", name: "SPACE", standardName: "SPACE" },
    58: { _nameRaw: "KEY_CAPSLOCK", name: "CAPSLOCK", standardName: "CAPS LOCK" },
    59: { _nameRaw: "KEY_F1", name: "F1", standardName: "F1" },
    60: { _nameRaw: "KEY_F2", name: "F2", standardName: "F2" },
    61: { _nameRaw: "KEY_F3", name: "F3", standardName: "F3" },
    62: { _nameRaw: "KEY_F4", name: "F4", standardName: "F4" },
    63: { _nameRaw: "KEY_F5", name: "F5", standardName: "F5" },
    64: { _nameRaw: "KEY_F6", name: "F6", standardName: "F6" },
    65: { _nameRaw: "KEY_F7", name: "F7", standardName: "F7" },
    66: { _nameRaw: "KEY_F8", name: "F8", standardName: "F8" },
    67: { _nameRaw: "KEY_F9", name: "F9", standardName: "F9" },
    68: { _nameRaw: "KEY_F10", name: "F10", standardName: "F10" },
    69: { _nameRaw: "KEY_NUMLOCK", name: "NUMLOCK", standardName: "NUM LOCK" },
    70: { _nameRaw: "KEY_SCROLLLOCK", name: "SCROLLLOCK", standardName: "SCROLL LOCK" },
    71: { _nameRaw: "KEY_KP7", name: "KP7", standardName: "NUMPAD 7" },
    72: { _nameRaw: "KEY_KP8", name: "KP8", standardName: "NUMPAD 8" },
    73: { _nameRaw: "KEY_KP9", name: "KP9", standardName: "NUMPAD 9" },
    74: { _nameRaw: "KEY_KPMINUS", name: "KPMINUS", standardName: "NUMPAD MINUS" },
    75: { _nameRaw: "KEY_KP4", name: "KP4", standardName: "NUMPAD 4" },
    76: { _nameRaw: "KEY_KP5", name: "KP5", standardName: "NUMPAD 5" },
    77: { _nameRaw: "KEY_KP6", name: "KP6", standardName: "NUMPAD 6" },
    78: { _nameRaw: "KEY_KPPLUS", name: "KPPLUS", standardName: "NUMPAD PLUS" },
    79: { _nameRaw: "KEY_KP1", name: "KP1", standardName: "NUMPAD 1" },
    80: { _nameRaw: "KEY_KP2", name: "KP2", standardName: "NUMPAD 2" },
    81: { _nameRaw: "KEY_KP3", name: "KP3", standardName: "NUMPAD 3" },
    82: { _nameRaw: "KEY_KP0", name: "KP0", standardName: "NUMPAD 0" },
    83: { _nameRaw: "KEY_KPDOT", name: "KPDOT", standardName: "NUMPAD DOT" },

    85: { _nameRaw: "KEY_ZENKAKUHANKAKU", name: "ZENKAKUHANKAKU", standardName: "" },
    86: { _nameRaw: "KEY_102ND", name: "102ND", standardName: "" },
    87: { _nameRaw: "KEY_F11", name: "F11", standardName: "F11" },
    88: { _nameRaw: "KEY_F12", name: "F12", standardName: "F12" },
    89: { _nameRaw: "KEY_RO", name: "RO", standardName: "" },
    90: { _nameRaw: "KEY_KATAKANA", name: "KATAKANA", standardName: "" },
    91: { _nameRaw: "KEY_HIRAGANA", name: "HIRAGANA", standardName: "" },
    92: { _nameRaw: "KEY_HENKAN", name: "HENKAN", standardName: "" },
    93: { _nameRaw: "KEY_KATAKANAHIRAGANA", name: "KATAKANAHIRAGANA", standardName: "" },
    94: { _nameRaw: "KEY_MUHENKAN", name: "MUHENKAN", standardName: "" },
    95: { _nameRaw: "KEY_KPJPCOMMA", name: "KPJPCOMMA", standardName: "" },
    96: { _nameRaw: "KEY_KPENTER", name: "KPENTER", standardName: "NUMPAD RETURN" },
    97: { _nameRaw: "KEY_RIGHTCTRL", name: "RIGHTCTRL", standardName: "RIGHT CTRL" },
    98: { _nameRaw: "KEY_KPSLASH", name: "KPSLASH", standardName: "" },
    99: { _nameRaw: "KEY_SYSRQ", name: "SYSRQ", standardName: "" },
    100: { _nameRaw: "KEY_RIGHTALT", name: "RIGHTALT", standardName: "RIGHT ALT" },
    101: { _nameRaw: "KEY_LINEFEED", name: "LINEFEED", standardName: "" },
    102: { _nameRaw: "KEY_HOME", name: "HOME", standardName: "HOME" },
    103: { _nameRaw: "KEY_UP", name: "UP", standardName: "UP ARROW" },
    104: { _nameRaw: "KEY_PAGEUP", name: "PAGEUP", standardName: "PAGE UP" },
    105: { _nameRaw: "KEY_LEFT", name: "LEFT", standardName: "LEFT ARROW" },
    106: { _nameRaw: "KEY_RIGHT", name: "RIGHT", standardName: "RIGHT ARROW" },
    107: { _nameRaw: "KEY_END", name: "END", standardName: "END" },
    108: { _nameRaw: "KEY_DOWN", name: "DOWN", standardName: "DOWN ARROW" },
    109: { _nameRaw: "KEY_PAGEDOWN", name: "PAGEDOWN", standardName: "PAGE DOWN" },
    110: { _nameRaw: "KEY_INSERT", name: "INSERT", standardName: "INS" },
    111: { _nameRaw: "KEY_DELETE", name: "DELETE", standardName: "DELETE" },
    112: { _nameRaw: "KEY_MACRO", name: "MACRO", standardName: "" },
    113: { _nameRaw: "KEY_MUTE", name: "MUTE", standardName: "" },
    114: { _nameRaw: "KEY_VOLUMEDOWN", name: "VOLUMEDOWN", standardName: "" },
    115: { _nameRaw: "KEY_VOLUMEUP", name: "VOLUMEUP", standardName: "" },
    116: { _nameRaw: "KEY_POWER", name: "POWER", standardName: "" },
    117: { _nameRaw: "KEY_KPEQUAL", name: "KPEQUAL", standardName: "NUMPAD EQUALS" },
    118: { _nameRaw: "KEY_KPPLUSMINUS", name: "KPPLUSMINUS", standardName: "" },
    119: { _nameRaw: "KEY_PAUSE", name: "PAUSE", standardName: "" },
    120: { _nameRaw: "KEY_SCALE", name: "SCALE", standardName: "" },

    121: { _nameRaw: "KEY_KPCOMMA", name: "KPCOMMA", standardName: "" },
    122: { _nameRaw: "KEY_HANGEUL", name: "HANGEUL", standardName: "" },
    123: { _nameRaw: "KEY_HANJA", name: "HANJA", standardName: "" },
    124: { _nameRaw: "KEY_YEN", name: "YEN", standardName: "" },
    125: { _nameRaw: "KEY_LEFTMETA", name: "LEFTMETA", standardName: "LEFT META" },
    126: { _nameRaw: "KEY_RIGHTMETA", name: "RIGHTMETA", standardName: "RIGHT META" },
    127: { _nameRaw: "KEY_COMPOSE", name: "COMPOSE", standardName: "" },

    // Mouse button codes are artificially offset by 0xFFFF0000 in `X11VoicenotesHelper`.
    0xFFFF0001:{_nameRaw: "1" , name: "Button1" , standardName: "MOUSE LEFT"},
    0xFFFF0002:{_nameRaw: "2" , name: "Button2" , standardName: "MOUSE MIDDLE"},
    0xFFFF0003:{_nameRaw: "3" , name: "Button3" , standardName: "MOUSE RIGHT"},
};
