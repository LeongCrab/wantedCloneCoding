//헤더 드랍 다운
{
    let menu = document.querySelector(".menuWrap");
    let hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("mouseover", () => {
        menu.style.display="block";
    });
    let header = document.querySelector('.header');
    header.addEventListener("mouseleave", () => {
        menu.style.display="none";
    });
}

//탑 배너 슬라이드
{
    let banner = document.querySelector('#topBanner');
    let slides = document.querySelector('.topBannerWrap');
    let slide = document.querySelectorAll('.topBannerItem');
    
    window.onload =()=>{
        const lastSlide = slide.item(slide.length - 1).cloneNode(true);
        const firstSlide = slide.item(0).cloneNode(true);
        slide.item(slide.length - 1).after(firstSlide);
        slide.item(0).before(lastSlide);
        slides.scrollTo({left: 1060, behavior: 'auto'});
    }

    let leftBtn = document.querySelector('.topBanner_arrow_left');
    let rightBtn = document.querySelector('.topBanner_arrow_right');
    let slide_idx = 0;
    
    let autoNext = setInterval(() => {
        slide_idx += 1;
        if (slide_idx < slide.length)
            slides.scrollTo({left: 530 + slide_idx * 1060, behavior: 'smooth'});
        else{
            slide_idx = 0;
            slides.scrollTo({left: 530, behavior: 'auto'});
        }
    }, 4000);

    banner.addEventListener('mouseover', () => {
        clearInterval(autoNext);
    });

    banner.addEventListener('mouseout', () => {
        autoNext = setInterval(() => {
            slide_idx += 1;
            if (slide_idx < slide.length)
                slides.scrollTo({left: 530 + slide_idx * 1060, behavior: 'smooth'});
            else{
                slide_idx = 0;
                slides.scrollTo({left: 530, behavior: 'auto'});
            }
        }, 4000);
    });
    
    leftBtn.addEventListener('click', () => {
        slide_idx -= 1;
        if (slide_idx >= 0)
            slides.scrollTo({left: 530 + slide_idx * 1060, behavior: 'smooth'});
        else{
            slide_idx = slide.length - 1;   
            slides.scrollTo({left: 530 + slide_idx * 1060, behavior: 'auto'});
        }
    });

    rightBtn.addEventListener('click', () => {
        slide_idx += 1;
        if (slide_idx < slide.length)
            slides.scrollTo({left: 530 + slide_idx * 1060, behavior: 'smooth'});
        else{
            slide_idx = 0;
            slides.scrollTo({left: 530, behavior: 'auto'});
        }
    });
}

// 커리어 태그 슬라이드
{
    let slides = document.querySelector('#career_slides');
    let leftBtn = document.querySelector('#career_scrollSnap .arrowLeft');
    let rightBtn = document.querySelector('#career_scrollSnap .arrowRight');
    let move = 300;
    leftBtn.addEventListener('click', () => {
        let current = slides.scrollLeft;
        slides.scrollTo({left: current - move, behavior: 'smooth'});
    });

    rightBtn.addEventListener('click', () => {
        let current = slides.scrollLeft;
        slides.scrollTo({left: current + move, behavior: 'smooth'});
    });

    slides.addEventListener("scroll", () => {
        if(slides.scrollLeft == slides.scrollWidth - slides.clientWidth)
            rightBtn.style.visibility = 'hidden';
        else
            rightBtn.style.visibility = 'visible';
        if(slides.scrollLeft == 0)
            leftBtn.style.visibility = 'hidden';
        else
            leftBtn.style.visibility = 'visible';
    });
}

//커리어 태그 클릭
{
    const tags = document.querySelectorAll('.careerTag, .careerTag_selected');
    let selected = document.querySelector('.careerTag_selected');
    tags.forEach( (tag) => {
        tag.addEventListener('click', () => {
            selected.classList.remove("careerTag_selected");
            selected.classList.add('careerTag');
            selected = tag;
            tag.classList.remove('careerTag');
            tag.classList.add('careerTag_selected');
        });
    });
}

function menu() {
    alert("메뉴");
}

function search() {
    alert("검색 아이콘");
}

function career() {
    alert(`취직/이직 준비하시기도 바쁘시죠? 😎 커리어 인사이트, 이제 따로 찾지 말고 원티드에서 만나보세요! 검증된 IT업계 전문가들이 다양한 채널에서 생산하는 커리어 콘텐츠를 선별해서 관심 태그 기반으로 제공해 드립니다.`);
}

function careerMore() {
    alert("더 많은 콘텐츠 보기 클릭");
}