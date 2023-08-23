## RUN: gradio app/main.py demo.app

import gradio as gr

from .models import get_random_model


def greet(name):
    return f"Hello {name}!"


with gr.Blocks() as demo:
    text = gr.Interface(fn=greet, inputs="text", outputs="text")


if __name__ == "__main__":
    demo.launch()
