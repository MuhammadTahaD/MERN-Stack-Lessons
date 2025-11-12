import yt_dlp

url = "https://youtu.be/kD4tWJs3dvo?si=7UvsU4Z3vdEn9ENu"

# Options for audio-only download
audio_opts = {
    'format': 'bestaudio/best',
    'outtmpl': 'downloads/%(title)s.%(ext)s',
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192',
    }],
}

with yt_dlp.YoutubeDL(audio_opts) as ydl:
    ydl.download([url])
