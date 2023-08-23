## RUN: gradio app/main.py demo.app

import gradio as gr

from .models import get_random_model


with gr.Blocks() as demo:
    random_model = gr.Interface(fn=get_random_model, inputs=None, outputs="text")


if __name__ == "__main__":
    demo.launch()
