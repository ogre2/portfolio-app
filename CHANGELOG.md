# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.5] - 2022-06-22

### Added

- Created `<routes>` directory inside `<src>` folder for app routers.
- Created index route file inside the routes folder.

### Changes

- Movied index GET method from server file to the index router file.

## [0.0.4] - 2022-06-22

### Added

- Created `<config>` directory inside `<src>` folder with config file.
- Configured server port.
- Installed colors, instantiated in the config file.
- Installed dotenv, configured in the config file.
- Installed cors and helmet, instantiated in the config file.

### Changes

- Used configured app server port in the server launch.
- Enabled json spaces and case sensitive routing in the server file.
- Enabled express.json and urlencoded middleware.

## [0.0.3] - 2022-06-22

### Added

- Created `<src>` subdirectory to house backend code.
- Added server file inside the src subdirectory for app server code.
- Initialized express inside server file, with simple GET request.

### Changes

- Modified script in `<package.json>` for nodemon to launch server.

## [0.0.2] - 2022-06-22

### Added

- Initialized npm.
- Installed express as Node framework.
- Installed nodemon as development dependency for server auto reload.

## [0.0.1] - 2022-06-22

### Added

- Initial project build.
- Created README, license, and .gitignore files.
- Created CHANGELOG file.

### Changes

- Project details in the README file.
- Added [img.shields.io](img.shields.io) to README.
- Added contributors and contact sections to README.

[Unreleased]: https://github.com/ogre2/portfolio-app/compare/v0.0.5...HEAD
[0.0.5]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.5
[0.0.4]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.4
[0.0.3]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.3
[0.0.2]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.2
[0.0.1]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.1
