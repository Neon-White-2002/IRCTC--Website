// JAVA-SCRIPT:

// CURRENT (DATE & TIME):
const date_and_time_text = document.getElementById("date-and-time-button");

setInterval(() =>
{
    var date = new Date();
    date_and_time_text.innerHTML = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} [${date.toLocaleTimeString()}]`;
}, 1000)

// SUB-HEADER-BUTTON-ANIMATION:
const sub_header_button = document.querySelectorAll(".sub-header-one button");
const sub_header_links = document.querySelectorAll(".sub-header-two a");

sub_header_button.forEach((button) =>
{
    const icon = button.querySelector("i");
    button.addEventListener("mouseover", () =>
    {
        icon.classList.add("fa-bounce");
    });

    button.addEventListener("mouseout", () =>
    {
        icon.classList.remove("fa-bounce");
    });
});

sub_header_links.forEach((button) =>
{
    const icon = button.querySelector("i");
    button.addEventListener("mouseover", () =>
    {
        icon.classList.add("fa-bounce");
    });

    button.addEventListener("mouseout", () =>
    {
        icon.classList.remove("fa-bounce");
    });
});

// FORM-HEADER-ANIMATION:
const form_header_link = document.querySelectorAll(".form-header a");
const form_sub_header_text = document.querySelector("h5");

form_header_link.forEach((button) =>
{
    const icon = button.querySelector("i");
    button.addEventListener("mouseover", () =>
    {
        icon.classList.add("fa-bounce");
    });

    button.addEventListener("mouseout", () =>
    {
        icon.classList.remove("fa-bounce");
    })
});

// FORM-BUTTON-ANIMATION:
const form_button_links = document.querySelectorAll(".form-button-view button");

form_button_links.forEach((button) =>
{
    const icon = button.querySelector("i");
    button.addEventListener("mouseover", () =>
    {
        icon.classList.add("fa-beat");
    });

    button.addEventListener("mouseout", () =>
    {
        icon.classList.remove("fa-beat");
    })
})

// FORM-CONTAINER-INPUT-(ANIMATION):
const form_input_from_view = document.getElementById("form-input-content-view-from");
const form_input_to_view = document.getElementById("form-input-content-view-to");

const form_input_view_from = form_input_from_view.querySelector(".form-input-view-box span");
const form_input_view_to = form_input_to_view.querySelector(".form-input-view-box span");

const form_input_view_from_input_box = form_input_from_view.querySelector(".form-input-view-box input");
const form_input_view_to_input_box = form_input_to_view.querySelector(".form-input-view-box input");

form_input_from_view.addEventListener("click", () =>
{
    form_input_view_from.style.top = "-15%";
});

form_input_to_view.addEventListener("click", () =>
{
    form_input_view_to.style.top = "-15%";
});

form_input_view_from_input_box.addEventListener("keyup", () =>
{
    if(form_input_view_from_input_box.value === "")
    {
        form_input_view_from.style.top = "50%";
    }
    else
    {
        form_input_view_from.style.top = "-15%";
    }
});

form_input_view_to_input_box.addEventListener("keyup", () =>
{
    if(form_input_view_to_input_box.value === "")
    {
        form_input_view_to.style.top = "50%";
    }
    else
    {
        form_input_view_to.style.top = "-15%";
    }
});

// SERVICE-BOX:
const service_view_box = document.querySelectorAll(".services-view-box");

service_view_box.forEach((box) =>
{
    const icon = box.querySelector("i");
    box.addEventListener("mouseover", () =>
    {
        icon.classList.add("fa-bounce");
    });

    box.addEventListener("mouseout", () =>
    {
        icon.classList.remove("fa-bounce");
    });
});

// SOCIAL-LINKS:
const social_links = document.querySelectorAll(".social-link-view");

social_links.forEach((link) =>
{
    const icon = link.querySelector("i");
    link.addEventListener("mouseover", () =>
    {
        icon.classList.add("fa-bounce");
    });

    link.addEventListener("mouseout", () =>
    {
        icon.classList.remove("fa-bounce");
    });
});

// CHAT-BOT-CONTAINER:
const chat_bot_container = document.getElementById("chat-bot-container");
const chat_bot_close_container = document.getElementById("close-chat-bot-container");

const chat_bot_ask_disha = document.getElementById("chat-bot-disha-profile-photo-view");

chat_bot_ask_disha.addEventListener("click", () =>
{
    chat_bot_container.style.display = "flex";
});

chat_bot_close_container.addEventListener("click", () =>
{
    chat_bot_container.style.display = "none";
});

window.addEventListener("click", (event) =>
{
    if(event.target === chat_bot_container)
    {
        chat_bot_container.style.display = "none";
    }
});

// TIME-WELL-WISHER:
const time_wish_text = document.getElementById("time-wish-text");
setInterval(() =>
{
    let new_time = new Date();
    let current_hours = new_time.getHours();

    if(current_hours >= 5 && current_hours < 12)
    {
        time_wish_text.innerHTML = "'GOOD MORNING' !";
    }
    else if(current_hours >= 12 && current_hours < 18)
    {
        time_wish_text.innerHTML = "'GOOD AFTER-NOON' !";
    }
    else
    {
        time_wish_text.innerHTML = "'GOOD EVENING' !";
    }
}, 1000)

// BOOK-TICKET-ASK-DISHA:
const book_ticket_ask_disha = document.getElementById("book-ticket-ask-disha");
const book_ticket_content_container = document.getElementById("book-ticket-conten-container");

book_ticket_ask_disha.addEventListener("click", () =>
{
    const icon = book_ticket_ask_disha.querySelector("i");

    if(icon.className.match("fa-chevron-down"))
    {
        icon.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
    else
    {
        icon.classList.replace("fa-chevron-up", "fa-chevron-down");
    }

    book_ticket_content_container.classList.toggle("show-book-ticket-content");
});

// UPCOME-BOOKING:
const upcome_book_text = document.getElementById("upcome-book-text");
const upcome_book_content_container = document.getElementById("upcome-booking-view-container");

upcome_book_text.addEventListener("click", () =>
{
    const icon = upcome_book_text.querySelector("i");

    if(icon.className.match("fa-chevron-down"))
    {
        icon.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
    else
    {
        icon.classList.replace("fa-chevron-up", "fa-chevron-down");
    }

    upcome_book_content_container.classList.toggle("show-upcome-booking-content");
});