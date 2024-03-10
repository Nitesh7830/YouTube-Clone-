<!-- @format -->

# Create project

    - using npx create-react-app
    - import tailwind

# Create componenet

    - create header
    - create slidebar
    - create mainconaatainer

# Create Strore

    - import redux (npm install @reduxjs/toolkit)
    - import react-redux (npm install react-redux)
    - setup store
    - create slice for hamberger icon (appSlice)
            - this slice will contain app levle data
    - provide the store to the app at root level

# Create hamburger toggle functionality

    - dispatch an action which will update the store
    - suscribe the store using useSelector

# build button present in the top of main container

# Create video container section

    -Fetch api
    -Create video cart

# build video streaming page

    - Using outlet -> outlet provide the capability to nested route
    - use UseSearch parm to ectract from url

# import react router dom lib

    - create routes for navigation

# Building search functionality

    - search caontain suggestion
        -for suggestion api call happen which gives response suggestion
        -On every key press there is an api call
        - difference between the two keypress is 200ms then make api call it will help to elimniate the debouncing
        - time between two alternative api call is known debouncing
    - How search is working under the hood
        ![alt text](https://app.eraser.io/workspace/Coriha94OMN2AE4I9Z83?elements=vEf4WlIgrwj9GlEXuP-rdg)

# Building caching in search

    -Build search slice inside the store and put the value of the search result inside the slice

# Building live chat feature

    - live chat is used api pooling
    - Create Chat section component
    - make api call using api poolin
    - build chat slice for the storing message
    - store the api data in the store
    - suscribe the stroe and bring data from the store
