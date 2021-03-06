Command line utility node.js based to create lazy images
========================================================

Usage:

    lazimages --width [number] --height [number] --file [string] --times [number]

Options:

    -w, --width   [required] width of result image
    -h, --height  [required] height of result image
    -t, --times   [default: 1] number of images to create
    -f, --file    [default: "image.png"] base name of the image, incrementally by "_n"

Dependencies
------------

This CLI depends on [GraphicsMagick](http://www.graphicsmagick.org/). In OSX, the easy way to install it's through homebrew:

    brew install --use-gcc --with-perlmagick graphicsmagick

In other cases, installation instructions may be found [here](http://www.graphicsmagick.org/README.html#installation)

Installation
------------

Clone this project on github:

    git clone https://github.com/nobuti/Lazy-images.git

Then, link the module to make it available system-wide:

    npm link

If that throws npm ERR! Error: EACCES then:

    sudo npm link

It should work.