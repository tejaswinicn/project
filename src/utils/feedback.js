export const triggerFeedback = () => {
    const audio = new Audio('/alert.mp3');
    audio.play();
  
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }
  };
  