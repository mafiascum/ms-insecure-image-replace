# ms-insecure-image-replace
MafiaScum Insecure Image Replace Utility

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

## Installation

```docker pull cciccia/ms-insecure-image-replace```

## Usage

```docker run --rm <other docker options you might need> cciccia/ms-insecure-image-replace [-p | --port <port>] [-v | --verbose] [-e <logfile>] [-o <logfile>] <inFile> <host> <database> <username> <password>```

#### options
```p, port: db port (default 3306)```

```v, verbose: verbose mode (line by line output)```

```e: error log file location (default ./error.log)```

```o: output file (defaults to stdout)```

#### required arguments
```inFile: location of mapping file (mount containing dir w/ docker run -v)```

```host: db host```

```database: db name ```

```username: db username ```

```password: db password ```