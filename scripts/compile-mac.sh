#!/bin/bash

# Exit on error
set -e

# Get the build mode from arguments and map to Swift build configuration
INPUT_MODE=${1:-production}
if [ "$INPUT_MODE" = "development" ]; then
  BUILD_MODE="debug"
else
  BUILD_MODE="release"
fi

echo "Building native addon in $INPUT_MODE mode (Swift build: $BUILD_MODE)..."

# Get directory paths
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
ENTITLEMENTS_PATH="entitlements.mac.plist"

# Build for ARM64
echo "Building Swift executable for ARM64..."
swift build -c ${BUILD_MODE} --product MacVoicenotesHelper --arch arm64
cp .build/${BUILD_MODE}/MacVoicenotesHelper .build/MacVoicenotesHelper-arm64

# Build for x86_64
echo "Building Swift executable for x86_64..."
swift build -c ${BUILD_MODE} --product MacVoicenotesHelper --arch x86_64
cp .build/${BUILD_MODE}/MacVoicenotesHelper .build/MacVoicenotesHelper-x86_64

# Create universal binary
echo "Creating universal binary..."
lipo -create -output .build/MacVoicenotesHelper .build/MacVoicenotesHelper-arm64 .build/MacVoicenotesHelper-x86_64

# Copy the universal binary to the desired location
echo "Copying universal binary to $ROOT_DIR/bin/MacVoicenotesHelper..."
cp .build/MacVoicenotesHelper "$ROOT_DIR/bin/MacVoicenotesHelper"

# Clean up intermediate files
rm .build/MacVoicenotesHelper-arm64 .build/MacVoicenotesHelper-x86_64

# Make executable
chmod +x "$ROOT_DIR/bin/MacVoicenotesHelper"

echo "Build complete for architecture $ARCH in $BUILD_MODE mode."
