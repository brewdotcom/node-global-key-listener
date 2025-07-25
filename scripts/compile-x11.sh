#!/usr/bin/env bash
set -xe
c++ src/bin/X11VoicenotesHelper/main.cpp -o bin/X11VoicenotesHelper -lX11 -lXi -static-libgcc -static-libstdc++
strip bin/X11VoicenotesHelper
