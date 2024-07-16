import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const Img = () => {
    const [compressedFile, setCompressedFile] = useState(null);
    const [compressionQuality, setCompressionQuality] = useState(0.8);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
                initialQuality: compressionQuality, 
            };
            
            try {
                const compressedFile = await imageCompression(file, options);
                setCompressedFile(compressedFile);
            } catch (error) {
                console.error("Error compressing the file:", error);
            }
        }
    };

    const handleQualityChange = (event) => {
        setCompressionQuality(event.target.value / 100);
    };

    return(
        <div className="img">
            <div className="compress">
                <div>
                    <h1>Photo Compression</h1>
                    <h3>Reduce the file size of your photos without sacrificing quality.</h3>
                </div>
                <div className="file">
                    <h4>Upload Photo</h4>
                    <input type="file" accept="image/*" onChange={handleFileUpload} />
                    <h4>Photo Quality</h4>
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value={compressionQuality * 100}
                        onChange={handleQualityChange}
                    />
                    <h4>{Math.round(compressionQuality * 100)}%</h4>
                </div>
            </div>
            {compressedFile && (
                <div className="result">
                    <h4>Compressed File</h4>
                    <a href={URL.createObjectURL(compressedFile)} download="img.jpg">
                        <div className="btn">Download Compressed Image</div>
                    </a>
                </div>
            )}
        </div>
    )
}

export default Img;