from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('webServer.html')

# Emitir evento para encender la luz roja
@app.route('/rojo')
def luz_roja():
    socketio.emit('led_red')
    return 'Luz roja encendida'

# Emitir evento para encender la luz amarilla
@app.route('/amarillo')
def luz_amarilla():
    socketio.emit('led_yellow')
    return 'Luz amarilla encendida'

# Emitir evento para encender la luz verde
@app.route('/verde')
def luz_verde():
    socketio.emit('led_green')
    return 'Luz verde encendida'

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
