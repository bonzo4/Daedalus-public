export const svgHtml = (value) => {
    const store = {
        'medal': '<svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#F5F3F7"><path d="M10.0003 12.5002C13.222 12.5002 15.8337 9.88849 15.8337 6.66683C15.8337 3.44517 13.222 0.833496 10.0003 0.833496C6.77866 0.833496 4.16699 3.44517 4.16699 6.66683C4.16699 9.88849 6.77866 12.5002 10.0003 12.5002Z" stroke="#F5F3F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.84134 11.5752L5.83301 19.1669L9.99967 16.6669L14.1663 19.1669L13.158 11.5669" stroke="#F5F3F7" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        'book': '<svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#F5F3F7"><path d="M13.75 2.5V10L11.25 8.125L8.75 10V2.5" stroke="#F5F3F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75002 16.875C3.74898 16.6285 3.79678 16.3842 3.89064 16.1563C3.9845 15.9283 4.12257 15.7212 4.29689 15.5469C4.4712 15.3726 4.67831 15.2345 4.90626 15.1406C5.13422 15.0468 5.3785 14.999 5.62502 15H16.25V2.50002H5.62502C5.3785 2.49898 5.13422 2.54678 4.90626 2.64064C4.67831 2.7345 4.4712 2.87257 4.29689 3.04689C4.12257 3.2212 3.9845 3.42831 3.89064 3.65626C3.79678 3.88422 3.74898 4.1285 3.75002 4.37502V16.875Z" stroke="#F5F3F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75 16.875V17.5H15" stroke="#F5F3F7" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        'discord': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#e42575"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.4679 14.2227C18.4679 14.2227 17.2453 16.3416 14.0666 16.4439C14.0666 16.4439 13.5487 15.8153 13.1173 15.2604C15.0015 14.7193 15.7207 13.521 15.7207 13.521C15.1309 13.9159 14.57 14.1936 14.0666 14.3833C13.3473 14.6901 12.6569 14.8947 11.981 15.0119C10.6001 15.2747 9.33438 15.2016 8.25559 14.997C7.4357 14.8364 6.73097 14.6027 6.14124 14.3684C5.81042 14.237 5.45077 14.0764 5.0912 13.8718L5.03486 13.8391L5.01811 13.8314L4.96178 13.7987L4.9042 13.7547L4.50147 13.5061C4.50147 13.5061 5.19194 14.6759 7.01863 15.2307C6.58714 15.7862 6.05491 16.4439 6.05491 16.4439C2.87618 16.3416 1.66797 14.2227 1.66797 14.2227C1.66797 9.51634 3.73916 5.702 3.73916 5.702C5.81042 4.1237 7.78094 4.16711 7.78094 4.16711L7.92477 4.34254C5.33577 5.10256 4.14189 6.25744 4.14189 6.25744C4.14189 6.25744 4.45838 6.08201 4.99053 5.83343C6.52956 5.14656 7.75219 4.95686 8.25559 4.91285L8.50009 4.88371C9.37747 4.76656 10.3699 4.73742 11.4056 4.85398C12.772 5.01514 14.2391 5.42428 15.735 6.25744C15.735 6.25744 14.5987 5.16143 12.1535 4.40142L12.3549 4.16711C12.3549 4.16711 14.3255 4.1237 16.3967 5.702C16.3967 5.702 18.4679 9.51634 18.4679 14.2227ZM5.91108 11.2409C5.91108 10.3495 6.55832 9.61863 7.3782 9.61863C8.19809 9.61863 8.85973 10.3495 8.84532 11.2409C8.84532 12.1324 8.19809 12.8633 7.3782 12.8633C6.57273 12.8633 5.91108 12.1324 5.91108 11.2409ZM11.1611 11.2409C11.1611 10.3495 11.8083 9.61863 12.6282 9.61863C13.4481 9.61863 14.0953 10.3495 14.0953 11.2409C14.0953 12.1324 13.4481 12.8633 12.6282 12.8633C11.8227 12.8633 11.1611 12.1324 11.1611 11.2409Z" fill="#F5F3F7"></path></svg>',
        'twitter': '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#e42575"><path d="M18 5.87136C17.4113 6.1327 16.7787 6.3087 16.1147 6.38803C16.7927 5.98203 17.3133 5.3387 17.558 4.57203C16.924 4.94803 16.2213 5.22136 15.4733 5.3687C14.8753 4.7307 14.0213 4.33203 13.0773 4.33203C10.958 4.33203 9.40067 6.30936 9.87933 8.36203C7.152 8.22536 4.73333 6.9187 3.114 4.9327C2.254 6.40803 2.668 8.33803 4.12933 9.31536C3.592 9.29803 3.08533 9.1507 2.64333 8.9047C2.60733 10.4254 3.69733 11.848 5.276 12.1647C4.814 12.29 4.308 12.3194 3.79333 12.2207C4.21067 13.5247 5.42267 14.4734 6.86 14.5C5.48 15.582 3.74133 16.0654 2 15.86C3.45267 16.7914 5.17867 17.3347 7.032 17.3347C13.1267 17.3347 16.57 12.1874 16.362 7.5707C17.0033 7.10736 17.56 6.52936 18 5.87136Z" fill="#F5F3F7"></path></svg>',
        'calendar': '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
        'account': '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>',
        'admin': '<svg width="20" height="20" version="1.1" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"> <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata> <g><path d="M484.8,941.2l-48.5-84.1c-16.9-29.3-6.9-66.7,22.4-83.6l10.7-6.2c-0.7-6.7-1-13.5-1-20.2s0.3-13.4,1-20.2l-10.7-6.1c-14-8.1-24.3-21.6-28.5-37.2c-4.2-15.7-2-32.4,6.1-46.5l48.5-84.1c8.1-14,21.6-24.3,37.2-28.5c5.2-1.4,10.5-2.1,15.9-2.1c10.7,0,21.3,2.8,30.6,8.2l10.8,6.2c11-7.5,22.7-14.1,34.8-19.8v-12.8c0-1,0.6-1.9,0.6-2.9c-32.4-24.6-73-43.7-125.4-53.8v-30.3c72.2-34.5,122.5-107.6,122.5-192.9C611.8,106,515.8,10,397.4,10C279,10,183.1,106,183.1,224.4c0,85.4,50.3,158.5,122.5,192.9v30.3c-244.1,46.8-245,283.2-245,419.9c0,106.7,466.7,103.7,461.5,102.3C506.3,965.6,492.9,955.3,484.8,941.2z"/><path d="M899.1,747.1c0-18-3.2-35-7.8-51.6l48.1-27.7l-48.6-84.1l-47.5,27.4c-24.3-24.7-55.2-42.4-89.9-51.4l0-55.4h-97.1v55.4c-34.6,9-65.6,26.6-89.9,51.4l-47.5-27.4l-48.6,84.1l48.1,27.7c-4.5,16.6-7.8,33.6-7.8,51.6s3.2,35,7.8,51.6l-48.1,27.8l48.6,84.1l47.5-27.4c24.3,24.7,55.3,42.4,90,51.4V990l97.1-0.1v-55.3c34.6-8.9,65.7-26.7,90-51.4l47.5,27.4l48.5-84.1l-48-27.7C896,782.2,899.1,765.2,899.1,747.1z M704.9,864.4c-64.8,0-117.2-52.4-117.2-117.2c0-64.7,52.4-117.2,117.2-117.2s117.2,52.5,117.2,117.2C822.1,811.9,769.7,864.4,704.9,864.4z"/></g></svg>'
    }

    if (store[value])
    {
        return store[value];   
    }

    return '';
}