import ('../js/events-model.js').then(res => {
    let events = res.events;
    events = events.filter(event => event.Department === 'Electrical');
    console.log(events);

    events.map(event => {
        $('#event_added').append(
            `<div class="col s12 m4 ">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator responsive-img" src="../../images/events/${event['images']}" height="350" width="200">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${event['Event Name']}<i class="material-icons right">more_vert</i></span>

                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${event['Event Name']}<i class="material-icons right">close</i></span>
                    <div class="card_text">
                        <h6>Event Code: <strong style="font-weight: bold;">${event['Event Code']}</strong></h6>
                        <h6>Min Team: <strong style="font-weight: bold;">${event['Minimum Participants']} Members</strong></h6>
                        <h6>Max Team: <strong style="font-weight: bold;">${event['Maximum Participants']} Members</strong></h6>
                        <p>Department: <strong style="font-weight: bold;">${event['Department']}</strong></p>
                        <h6>Price: <strong style="font-weight: bold;">INR ${event['Event Price']} per Head</strong></h6>
                    </div>
                </div>
            </div>
        </div>`
        )
    })
});