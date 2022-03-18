import os
from flask import Flask,redirect,url_for,render_template,request, Response
import json
from werkzeug.utils import secure_filename

app=Flask(__name__)

#UPLOAD_FOLDER = '/home/david/Documents/master/cloud_computing/supervoices/FileServer/Audios'
UPLOAD_AUDIO_FOLDER = './../../FileServer/Audios/'
UPLOAD_IMAGE_FOLDER = './../../FileServer/Images/'

ALLOWED_AUDIO_EXTENSIONS = {'wav','mp3','mp4','ogg', 'jpg','png', 'jpeg'}
ALLOWED_IMAGE_EXTENSIONS = {'jpg','png', 'jpeg'}

app = Flask(__name__)
app.config['UPLOAD_AUDIO_FOLDER'] = UPLOAD_AUDIO_FOLDER
app.config['UPLOAD_IMAGE_FOLDER'] = UPLOAD_IMAGE_FOLDER


def allowed_audio(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_AUDIO_EXTENSIONS

def allowed_image(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_IMAGE_EXTENSIONS

@app.route('/uploadAudio', methods=['GET', 'POST'])
def upload_audio():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_audio(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_AUDIO_FOLDER'], filename))
            message =  json.dumps({"message": "Audio subido Exitosamente"})
            return Response(message, status=201, mimetype='application/json')
        

@app.route('/uploadImage', methods=['GET', 'POST'])
def upload_image():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return Response('No file part', status=400, mimetype='application/json')
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return Response('No selected part', status=400, mimetype='application/json')
        if file and allowed_image(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_IMAGE_FOLDER'], filename))
            message =  json.dumps({"message": "Imagen subida Exitosamente"})
            return Response(message, status=201, mimetype='application/json')
    

       

if __name__ == '__main__':
    app.run(port=5001,debug=True)