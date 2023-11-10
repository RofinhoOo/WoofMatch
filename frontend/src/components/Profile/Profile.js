import React, { useState, useEffect } from 'react';
import { auth } from '../../services/firebase';
import { useDropzone } from 'react-dropzone';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = auth.currentUser;
            setUser(currentUser);
        };

        fetchUser();
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFiles(acceptedFiles);
        },
    });

    if (!user) {
        // Si el usuario no está autenticado, puedes redirigirlo o mostrar un mensaje
        return <p>No hay usuario autenticado.</p>;
    }

    return (
        <div>
            <h2>Perfil de Usuario</h2>
            <p>Nombre: {user.displayName}</p>
            <p>Email: {user.email}</p>

            <div {...getRootProps()} style={dropzoneStyle}>
                <input {...getInputProps()} />
                <p>Arrastra y suelta la imagen de perfil aquí, o haz clic para seleccionarla.</p>
            </div>

            {files.length > 0 && (
                <div>
                    <p>Imagen seleccionada:</p>
                    <img src={URL.createObjectURL(files[0])} alt="Perfil" style={imageStyle} />
                </div>
            )}

            {/* Otros detalles del perfil según tus necesidades */}
        </div>
    );
};

const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginTop: '10px',
};

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '200px',
    marginTop: '10px',
};

export default Profile;
