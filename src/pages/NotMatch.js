import React from "react";

const NotMatch = props => {
    const pathname = window.location.pathname;

    return (
        <section className="content">
            <h4>
               404 Not Found
            </h4>
            <p>
                page: <b>{pathname}</b> you're looking not found
            </p>
        </section>
    );
};

export default NotMatch;