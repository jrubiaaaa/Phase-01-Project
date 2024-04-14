     // Initialize product quantity and bid timer
     let quantity =10;
     let bidEndTime = 0; 

     // Display uploaded image
     document.querySelector('#imageInput').addEventListener('change', function (e) {
         const image = e.target.files[0];
         const previewImage = document.querySelector('#previewImage');
         previewImage.src = URL.createObjectURL(image);
     });

     // Start bid timer
     function startBidTimer() {
         const bidPrice = parseFloat(document.querySelector('#bidPrice').value);
         if (!isNaN(bidPrice) && bidPrice > 0) {
             bidEndTime = Date.now() + 0 * 05 * 1000; // 30 minutes from now
             updateBidTimer();
         } else {
             alert('Please enter a valid bid price.');
         }
     }

     // Buy button click handler
     function buyProduct() {
         if (quantity > 0) {
             quantity--;
             document.querySelector('#productQuantity').textContent = quantity;
         } else {
             alert('Product out of stock!');
         }
     }

     // Update bid timer
     function updateBidTimer() {
         if (bidEndTime > 0) {
             const currentTime = Date.now();
             const remainingTime = bidEndTime - currentTime;
             if (remainingTime > 0) {
                 const minutes = Math.floor(remainingTime / 60000);
                 const seconds = Math.floor((remainingTime % 60000) / 1000);
                 document.querySelector('#bidTimer').textContent = `Bid ends in ${minutes} min ${seconds} sec`;
             } else {
                 document.querySelector('#bidTimer').textContent = 'Bid has ended';
             }
         }
     }

     // Call updateBidTimer every second
     setInterval(updateBidTimer, 1000);
