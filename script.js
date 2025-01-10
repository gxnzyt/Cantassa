// Initialize the panorama viewer
pannellum.viewer('panorama', {
    type: 'equirectangular',
    panorama: 'images/photo1.jpg', // Default photo
    autoLoad: true,
    hotSpots: [
        {
            pitch: 10, 
            yaw: 120, 
            type: 'scene',
            text: 'Next Scene',
            sceneId: 'photo2'
        }
    ],
    scenes: {
        photo2: {
            panorama: 'images/photo2.jpg'
        }
    }
});
