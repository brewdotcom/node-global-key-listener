// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "MacVoicenotesHelper",
    platforms: [
        .macOS(.v13)
    ],
    products: [
        .executable(name: "MacVoicenotesHelper", targets: ["MacVoicenotesHelper"])
    ],
    targets: [
        .executableTarget(
            name: "MacVoicenotesHelper",
            swiftSettings: [
                .unsafeFlags(["-enable-bare-slash-regex"])
            ],
            linkerSettings: [
                .unsafeFlags(["-Xlinker", "-sectcreate", "-Xlinker", "__TEXT", "-Xlinker", "__entitlements", "-Xlinker", "entitlements.mac.plist"])
            ]
        )
    ]
)
