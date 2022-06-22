# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2022-06-22

### Added

- Created public file for frontend assets (images, styles, etc).
- Added app favicon variations to public file.
- Installed animate.css and aos for scroll reveal animations.
- Created scss file for Sass styling.
- Created css file for compiled Sass files.
- Started main stylesheet.

## Changes

- Linked main app favicon to app layout file.
- Linked Apple and Android version of favicons to layout file.
- Linked main stylesheet to layout file.
- Linked animate.css and AOS to layout file.

## [1.0.0] - 2022-06-22

### Added

- `<client>` subdirectory to house frontend code.
- Created views and layouts folders to house EJS pages.
- Created index view file.
- Configured EJS as our frontend view engine in the server file.
- Routed app to layout file location.

### Changes

- Modified index router to render index view.

## [0.0.7] - 2022-06-22

### Added

- Installed ejs and express-ejs-layouts.

### Changes

- NPM Audit fix error caused by nodemon.

## [0.0.6] - 2022-06-22

### Changes

- Wrapped GET request in index router in a try-catch block.

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

[Unreleased]: https://github.com/ogre2/portfolio-app/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/ogre2/portfolio-app/releases/tag/v1.0.1
[1.0.0]: https://github.com/ogre2/portfolio-app/releases/tag/v1.0.0
[0.0.7]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.7
[0.0.6]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.6
[0.0.5]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.5
[0.0.4]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.4
[0.0.3]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.3
[0.0.2]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.2
[0.0.1]: https://github.com/ogre2/portfolio-app/releases/tag/v0.0.1
