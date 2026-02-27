import { useRef, useState } from "react";
import "../styles/uploadbox.scss";

export default function UploadBox({ file, setFile }) {
    const inputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFile = (selectedFile) => {
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        handleFile(droppedFile);
    };

    return (
        <div className="upload-container">
            <div
                className={`upload-box ${isDragging ? "dragging" : ""}`}
                onClick={() => inputRef.current.click()}
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
            >
                <div className="upload-icon"><i className="ri-upload-2-line"></i></div>
                <p>Upload File</p>

                <input
                    type="file"
                    ref={inputRef}
                    hidden
                    onChange={(e) => handleFile(e.target.files[0])}
                    required={true}
                />
            </div>

            {file && (
                <div className="file-preview">
                    <span>{file.name}</span>
                    <button onClick={() => setFile(null)}><i className="ri-delete-bin-line"></i></button>
                </div>
            )}
        </div>
    );
}