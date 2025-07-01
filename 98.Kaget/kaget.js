function startScare() {
      setTimeout(() => {
        document.getElementById('jumpscare').style.display = 'block';
        document.getElementById('scream').play();
      }, 3000);
    }