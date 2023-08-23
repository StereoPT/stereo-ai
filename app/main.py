## RUN: gradio app/main.py demo.app

import gradio as gr

from .models import get_random_model


with gr.Blocks() as demo:
    gr.Markdown("# [StereoAI]")
    with gr.Row():
        model_folder = gr.Textbox(
            label="Models Folder", placeholder="/Users/guidopereira/Downloads"
        )
        random_model = gr.Label(label="Random Model")
    random_model_btn = gr.Button("Get Random Model")
    random_model_btn.click(
        fn=get_random_model, inputs=model_folder, outputs=random_model
    )


if __name__ == "__main__":
    demo.launch()
