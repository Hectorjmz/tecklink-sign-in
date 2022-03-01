const mediaQuery = window.matchMedia('(min-width: 750px)')

function handleTabletChange(e) {
    const headerIconProfile = document.querySelector("#header-icon-profile-desktop");
    const menuDesktop = document.querySelector("#menu-desktop");
    const footer = document.querySelector("footer");


    if (e.matches) {
        // Then log the following message to the console
        console.log('Desktop Size')
        console.log(e)
        headerIconProfile.classList.remove("hide")
        menuDesktop.classList.remove("hide")
        footer.classList.remove("hide")

    } else {
        console.log("Mobile Size")
        headerIconProfile.classList.add("hide")
        menuDesktop.classList.add("hide")
        footer.classList.add("hide")

    }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery);