
    window.addEventListener('scroll', () => {
        const path = document.querySelector('#Opaque_Ring');
        const pathLength = path.getTotalLength();
        const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const drawLength = pathLength * scrollPercentage;

        path.style.strokeDasharray = drawLength + ' ' + pathLength;

        const movingDot = document.querySelector('#movingDot');
        const point = path.getPointAtLength(drawLength);
        movingDot.setAttribute('cx', point.x);
        movingDot.setAttribute('cy', point.y);

        const dotIndex = Math.floor(scrollPercentage * 7); 
        

        switch (dotIndex) {
            case 0:
                document.body.style.backgroundColor = 'green';

                document.querySelector('h1').innerText = 'Text for Dot 1';
                document.querySelector('h2').innerText = 'Subheading for Dot 1';
                document.querySelector('p').innerText = 'Description for Dot 1';

                document.querySelectorAll('.image-content img').forEach(img => img.style.display = 'none');
                document.querySelector('.image-content img:nth-child(1)').style.display = 'block';
                break;
            case 1:
                document.body.style.backgroundColor = 'blue';

                document.querySelector('h1').innerText = 'Text for Dot 2';
                document.querySelector('h2').innerText = 'Subheading for Dot 2';
                document.querySelector('p').innerText = 'Description for Dot 2';

                document.querySelectorAll('.image-content img').forEach(img => img.style.display = 'none');
                document.querySelector('.image-content img:nth-child(2)').style.display = 'block';
                break;
            case 2:
                document.body.style.backgroundColor = 'pink';

                document.querySelector('h1').innerText = 'Text for Dot 3';
                document.querySelector('h2').innerText = 'Subheading for Dot 3';
                document.querySelector('p').innerText = 'Description for Dot 3';
 
                document.querySelectorAll('.image-content img').forEach(img => img.style.display = 'none');
                document.querySelector('.image-content img:nth-child(3)').style.display = 'block';
                break;
            case 3:
                document.body.style.backgroundColor = 'red';

                document.querySelector('h1').innerText = 'Text for Dot 4';
                document.querySelector('h2').innerText = 'Subheading for Dot 4';
                document.querySelector('p').innerText = 'Description for Dot 4';

                document.querySelectorAll('.image-content img').forEach(img => img.style.display = 'none');
                document.querySelector('.image-content img:nth-child(4)').style.display = 'block';
                break;
            case 4:
                document.body.style.backgroundColor = 'orange';

                document.querySelector('h1').innerText = 'Text for Dot 5';
                document.querySelector('h2').innerText = 'Subheading for Dot 5';
                document.querySelector('p').innerText = 'Description for Dot 5';

                document.querySelectorAll('.image-content img').forEach(img => img.style.display = 'none');
                document.querySelector('.image-content img:nth-child(5)').style.display = 'block';
                break;
            case 5:
                document.body.style.backgroundColor = 'yellow';

                document.querySelector('h1').innerText = 'Text for Dot 6';
                document.querySelector('h2').innerText = 'Subheading for Dot 6';
                document.querySelector('p').innerText = 'Description for Dot 6';

                document.querySelectorAll('.image-content img').forEach(img => img.style.display = 'none');
                document.querySelector('.image-content img:nth-child(6)').style.display = 'block';
                break;
            case 6:
                document.body.style.backgroundColor = 'purple';

                document.querySelector('h1').innerText = 'Text for Dot 7';
                document.querySelector('h2').innerText = 'Subheading for Dot 7';
                document.querySelector('p').innerText = 'Description for Dot 7';
                // Show image 7, hide others
                document.querySelectorAll('.image-content img').forEach(img => img.style.display = 'none');
                document.querySelector('.image-content img:nth-child(7)').style.display = 'block';
                break;

            default:
                document.body.style.backgroundColor = 'violet';
   
                document.querySelector('h1').innerText = 'Default Text';
                document.querySelector('h2').innerText = 'Default Subheading';
                document.querySelector('p').innerText = 'Default Description';

                document.querySelectorAll('.image-content img:nth-child(8)').forEach(img => img.style.display = 'none');
                break;
        }
    });
