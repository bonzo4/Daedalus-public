export const svgHtml = (value) => {
    const store = {
        'medal': '<svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#F5F3F7"><path d="M10.0003 12.5002C13.222 12.5002 15.8337 9.88849 15.8337 6.66683C15.8337 3.44517 13.222 0.833496 10.0003 0.833496C6.77866 0.833496 4.16699 3.44517 4.16699 6.66683C4.16699 9.88849 6.77866 12.5002 10.0003 12.5002Z" stroke="#F5F3F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.84134 11.5752L5.83301 19.1669L9.99967 16.6669L14.1663 19.1669L13.158 11.5669" stroke="#F5F3F7" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        'book': '<svg width="20px" height="20px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" color="#F5F3F7"><path d="M13.75 2.5V10L11.25 8.125L8.75 10V2.5" stroke="#F5F3F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75002 16.875C3.74898 16.6285 3.79678 16.3842 3.89064 16.1563C3.9845 15.9283 4.12257 15.7212 4.29689 15.5469C4.4712 15.3726 4.67831 15.2345 4.90626 15.1406C5.13422 15.0468 5.3785 14.999 5.62502 15H16.25V2.50002H5.62502C5.3785 2.49898 5.13422 2.54678 4.90626 2.64064C4.67831 2.7345 4.4712 2.87257 4.29689 3.04689C4.12257 3.2212 3.9845 3.42831 3.89064 3.65626C3.79678 3.88422 3.74898 4.1285 3.75002 4.37502V16.875Z" stroke="#F5F3F7" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75 16.875V17.5H15" stroke="#F5F3F7" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    }

    if (store[value])
    {
        return store[value];   
    }

    return '';
}