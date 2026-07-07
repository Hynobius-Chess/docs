# Make and Undo Moves

## Describe in One Sentence

A make/undo move system allows a chess engine to apply a move to the board and later restore the previous position efficiently.

---

## Introduction

In a chess engine, a move is not just a simple change on the board.
It also changes important game information such as turn, castling rights, en passant status, and other state values.

To search deeply, the engine must be able to try a move, evaluate the resulting position, and then return to the previous position quickly.

This is why the engine needs a reliable system for making and undoing moves.

---

## Why It Is Important

Engines need to make/undo moves to simulate the future consequences. The deeper the engine thinks, the stronger the engine is. Thus, the make/undo move system should be fast.

We can do a simple math.

Suppose there are two engines. One makes one move a second, and the other makes a move within 0.1 seconds.

If we give them a minute to think, then the first engine can search for $60 \div 1 = 60$ positions, and the other one can search for $60 \div 0.1 = 600$ positions.

The second engine is 10 times stronger than the first one!

Also, this system be absolutely correct. It is because any little mistakes will lead to a massive destruction to the engine's memory system and other important functions.

---

## What Needs to Be Saved

Before applying a move, the engine should record the information that will be needed to restore the old position.

Typical information includes:

- The moving piece
- The source square and target square
- The captured piece, if any
- Castling rights
- En passant target information
- The fifty-move counter
- Other relevant state values

This saved information is often stored in a small history record.

---

## How Make Move Works

When the engine applies a move, it typically:

1. Read the current board state
2. Record the previous information that will be needed to undo
3. Update the board according to the move rules
4. Change the side to move
5. Update related game state

This process is usually called "make move".

---

## How Undo Move Works

When the engine wants to go back to the previous position, it:

1. Restore the board state from the saved history
2. Put the piece back to its original square if needed
3. Restore the captured piece if necessary
4. Recover the previous game state values
5. Switch back to the previous side to move

This process is usually called "undo move" or "unmake move".

---

## Why This Is Fast

The make/undo system is efficient because the engine does not need to rebuild the whole board from scratch.

Instead, it:

- Modifies the board directly
- Saves only the information that matters
- Restores the old state when needed

This is one of the key ideas behind fast chess search.

---

## A Simple Example

A simple pawn move can be used to show the idea clearly.

For example:

- A pawn moves from one square to another
- The engine records the old state
- The move is applied
- Later, the engine restores the previous board state

The same idea also works for captures, castling, promotion, and en passant.

---

## Summary

Make and undo move is one of the most basic but important mechanisms in a chess engine.

It allows the engine to:

- Apply a move temporarily
- Evaluate the resulting position
- Return to the previous position safely
- Search many branches efficiently

In short, without a correct make/undo system, a chess engine cannot search well.
