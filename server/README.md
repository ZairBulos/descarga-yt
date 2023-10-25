# DescargaYT (SERVER)

Welcome to the **DescargaYT** server documentation. This guide will help you get started with setting up and running the server for the YouTube Downloader project.

## Getting Started

To use the YouTube Downloader Backend, follow these steps:

1. Clone the Repository:

```bash
git clone https://github.com/ZairBulos/youtube-downloader.git
```

2. Navigate to the server folder:

```bash
cd youtube-downloader/server
```

## Installation

To install the necessary dependencies, run the following command:

**Using npm:**

```bash
npm install
```

**Using pnpm:**

```bash
pnpm install
```

### Environment Configuration

Create a `.env` file in the root of the server directory and add the following configuration to specify the desired server port:

```env
PORT=3000
```

You can replace 3000 with your preferred port number.

## Usage

Now that you have cloned the repository, installed the necessary dependencies, and configured the environment, you can start the server:

**Using npm:**

```bash
npm run dev
```

**Using pnpm:**

```bash
pnpm run dev
```

### Endpoints

1. Get Video Information

Retrieve basic information about a YouTube video using its URL.

* **URL**: `/info`
* **Method**: `GET`
* **Parameters**:
  * `url` (query parameter): The YouTube video URL.
* **Response**:
  * `title` (string). The title of the video.
  * `duration` (number). The duration of the video in seconds.
  * `image` (string). The URL to the video's thumbnail.
  
Example Request:

```bash
GET /info?url=https://www.youtube.com/watch?v=VIDEO_ID
```

2. Download Audio

Download the audio of a YouTube video in MP3 format.

* **URL**: `/download-audio`
* **Method**: `POST`
* **Parameters**:
  * ``url`` (query parameter): The YouTube video URL.
* **Response**: Audio file in MP3 format.
  
Example Request:

```bash
POST /download-audio?url=https://www.youtube.com/watch?v=VIDEO_ID
```

3. Download Video

Download the video of a YouTube video in MP4 format.

* **URL**: `/download-video`
* **Method**: `POST`
* Parameters:
  * `url` (query parameter): The YouTube video URL.
* **Response**: Video file in MP4 format.

Example Request:

```bash
POST /download-video?url=https://www.youtube.com/watch?v=VIDEO_ID
```