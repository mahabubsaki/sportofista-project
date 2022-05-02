import React from 'react';

const Blogs = () => {
    return (
        <div style={{ minHeight: '600px' }} className="text-center">
            <h1 className="text-3xl">Difference between javascript and nodejs.</h1>
            <p>Javascript is a programming language but node js is a runtime environment.We can run javascript only on browsers but node js can be run outside the browser.Javascript used on frontend and run on client side while node js used on backend and run on server side.</p>
            <h1 className="text-3xl">When should you use nodejs and when should you use mongodb?</h1>
            <p>We should use nodejs when we are attepmting any backend or server side work.More specifically if your frontend development is with javascript,then we should use node js or it's any library because it's more compitable with that. On the other hand,mongo db is used to save the data in their database. If our project needs to store the users data or any kind of data ,then we should use MongoDB.</p>
            <h1 className="text-3xl">Differences between sql and nosql databases.</h1>
            <p>In sql databases data storage model is structured with table which has rows and columns.In nosql databases data storage model is not structured because it stays there as json objects with key-values pair.Nosql data is more flexible than sql because we can make the data to read more compitable for us. We can make any operation in nosql database faster than sql database.</p>
            <h1 className="text-3xl">What is the purpose of jwt and how does it work?</h1>
            <p>JWT is used to implement authentication in web sites. This adds more security to our websites. It always tracks users and verify the real user with their token. By this no spammers can't enter to our website unauthorized. So our data will be more secure.When any user enter to our site we create a token for them and then we can check the token when we want to verify.</p>
        </div>
    );
};

export default Blogs;