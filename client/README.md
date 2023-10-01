# YouTube Downloader FrontEnd

Welcome to the YouTube Downloader FrontEnd documentation. This guide will help you get started with setting up and running the client for the YouTube Downloader project.

## Getting Started

Before you start using the YouTube Downloader FrontEnd, make sure you have completed the server-side setup as mentioned in the [server documentation](https://github.com/ZairBulos/youtube-downloader/tree/develop/server).

1. Navigate to the Client Folder

Change your current directory to the client folder within the cloned repository:

```bash
cd youtube-downloader/client
```

## Installation

Before you can run the client, you need to install the required packages and dependencies. We recommend using pnpm as the package manager, but you can also use npm or yarn if you prefer.

```bash
pnpm install
```

### Environment Configuration

Create a .env file in the root of the client directory to configure the client-side environment. Add the following configuration to specify the base API URL for the server:

```env
VITE_BASE_API=http://localhost:3000/api/youtube
```

Make sure to replace http://localhost:3000/api/youtube with the actual URL of your YouTube Downloader server if it's different.

## Usage

Now that you have cloned the repository, installed the necessary dependencies, and configured the environment, you can start the client:

```bash
pnpm run dev
```

## Technologies

<p style="text-align: left;"> 
  <p> 
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" 
      alt="react" width="65" height="65" 
    />
  </p>
  <p>
    <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" 
      alt="typescript" width="65" height="65" 
    />
  </p>
  <p>
    <img src="https://github.com/devicons/devicon/blob/master/icons/bootstrap/bootstrap-original.svg" 
      alt="bootstrap" width="65" height="65" 
    />
  </p>
</p>