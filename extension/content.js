console.log('content.js is running');
if (window.location.pathname === '/rexmanga') {
    // Create a new subpage element
    const subpageContent = document.createElement('div');
    subpageContent.id = 'rexmanga-subpage';
    subpageContent.innerHTML = '<h1>Welcome to the REXmanga Subpage</h1><p>This is a custom subpage for REXmanga.</p>';

    // Append the subpage element to the body or another appropriate container
    document.body.appendChild(subpageContent);
}