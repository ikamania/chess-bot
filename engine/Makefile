CC = gcc
CFLAGS = -Wall -Wextra -Iinclude
SRC = source/main.c source/app.c
OUT = build/chess-engine

all: $(OUT)

$(OUT): $(SRC)
	mkdir -p build
	$(CC) $(SRC) $(CFLAGS) -o $(OUT)

run: $(OUT)
	./$(OUT)

clean:
	rm -rf build/*
