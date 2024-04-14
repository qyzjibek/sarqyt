import React, { Component } from 'react';
import './landing.css';
import imageOfMain from './imageOfMain.png';
import { Link } from 'react-router-dom';
class Landing extends Component {
  render() {
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Header Example</title>
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
          <style dangerouslySetInnerHTML={{__html: "\n        body {\n            padding-top: 55px;\n            /* Header will have a top margin of 55px */\n        }\n\n        .header-container {\n            width: 1224px;\n            /* Set the container width */\n            height: 52px;\n            /* Set the container height */\n            margin: 0 auto;\n            /* Center the container */\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            background-color: #fff;\n            /* Set the background color to white or any other color */\n            position: relative;\n            /* Needed for absolute positioning of dropdown */\n        }\n\n        .navbar-brand {\n            margin-left: 55px;\n            /* Space from the left edge */\n        }\n\n        .city-dropdown {\n            margin-left: 55px;\n            /* Space between logo and dropdown */\n        }\n\n        .login-register-buttons {\n            margin-right: 30px;\n            /* Space on the right inside the container */\n        }\n\n        .login-register-buttons>button {\n            margin-left: 30px;\n            /* Space between register and login buttons */\n        }\n\n        .offer-section {\n            background-color: #f8f9fa;\n            /* Light gray background, adjust the color to match your design */\n            color: #212529;\n            /* Dark text, adjust if necessary */\n            padding: 20px;\n            /* Add some padding */\n        }\n\n        .offer-section h2 {\n            color: #28a745;\n            /* Green color for the heading, adjust to match the image */\n            font-size: 1.5em;\n            /* Adjust font-size as needed */\n            font-weight: bold;\n            /* Makes the font bold */\n            margin-bottom: 0.5em;\n            /* Spacing below the heading */\n        }\n\n        .offer-section p {\n            font-size: 1em;\n            /* Adjust font-size as needed */\n            color: #212529;\n            /* Adjust text color to match the image if it's not black */\n        }\n\n\n        .rounded-box {\n            border: 2px solid #28a745;\n            /* Green border color */\n            background-color: #fff;\n            /* White background color */\n        }\n\n        .form-control {\n            flex-grow: 1;\n            /* Allow input to fill space */\n            border: 2px solid #28a745;\n            /* Green border color for the input */\n        }\n\n        .btn-success {\n            color: #fff;\n            /* White text color */\n            background-color: #28a745;\n            /* Green background color */\n            border: none;\n            /* No border */\n        }\n\n\n\n        .card {\n            background-color: #f8f9fa;\n            /* Light gray background, adjust the color to match your design */\n            border: none;\n            /* Removes the border from the card */\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n            /* Adds a subtle shadow to the card */\n        }\n\n        .card-title {\n            color: #333;\n            /* Dark grey color for the card title */\n        }\n\n        .card-text {\n            color: #666;\n            /* Lighter grey color for the card text */\n        }\n\n        .card-text strong {\n            color: #28a745;\n            /* Green color for the numbers, adjust to match the image */\n            font-size: 2em;\n            /* Makes the number larger */\n        }\n\n\n        .offer-section {\n            background-color: #fff;\n            /* White background */\n            padding: 1em;\n            margin-top: 32px;\n            /* Spacing from the top */\n        }\n\n        .category-btn {\n            background-color: #fff;\n            /* White background */\n            color: #35A700;\n            /* Green text color */\n            border: 2px solid #35A700;\n            /* Green border */\n            padding: 10px 20px;\n            /* Padding inside the button */\n            border-radius: 24px;\n            /* Rounded borders */\n            cursor: pointer;\n            /* Hand cursor on hover */\n            transition: background-color 0.3s, color 0.3s;\n            /* Transition for smooth color change */\n        }\n\n        .category-btn:hover {\n            background-color: #35A700;\n            /* Green background on hover */\n            color: #fff;\n            /* White text color on hover */\n        }\n\n\n        .function-instance {\n            margin-bottom: 30px;\n            /* Spacing between function instances */\n        }\n\n        .function-instance h3 {\n            color: #333;\n            /* Dark text color for headers */\n            margin-bottom: 10px;\n            /* Spacing after the header */\n        }\n\n        .function-instance p {\n            color: #666;\n            /* Light text color for descriptions */\n        }\n\n\n\n        .team-member-card {\n            padding-bottom: 20px;\n            /* Space at the bottom */\n        }\n\n        .image-placeholder {\n            width: 140px;\n            /* Placeholder width */\n            height: 140px;\n            /* Placeholder height */\n            background-color: #eaeaea;\n            /* Placeholder color */\n            margin: 0 auto;\n            /* Center the placeholder */\n            border-radius: 10px;\n            /* Slightly rounded corners for the placeholder */\n        }\n\n        .name-tag {\n            /* Styling for the name tag */\n        }\n\n        /* Adjustments for smaller screens */\n        @media (max-width: 768px) {\n            .team-member-card {\n                margin-left: auto;\n                margin-right: auto;\n                width: 80%;\n            }\n\n            .image-placeholder {\n                width: 120px;\n                /* Smaller width for the placeholder */\n                height: 120px;\n                /* Smaller height for the placeholder */\n            }\n        }\n\n        /* Further customizations may be needed */\n    " }} />
          <div className="header-container">
          <a className="navbar-brand" href="#" style={{ 
            color: 'black', 
            backgroundColor: 'white', // or any other color
            borderRadius: '20px', // Adjust as needed
            padding: '10px 20px', // Adjust as needed
            fontSize: '1.5em', // Adjust as needed
            textDecoration: 'none' // This will remove the underline from the link
          }}>
            BTS Digital Case
          </a>

            <div className="dropdown city-dropdown">
              <button className="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Выберите города
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">City 1</a>
                <a className="dropdown-item" href="#">City 2</a>
                <a className="dropdown-item" href="#">City 3</a>
                {/* Add more cities as needed */}
              </div>
            </div>
            <div className="login-register-buttons">
              <Link to="/login">
              <button className="btn btn-success" type="button">Войти</button>
              </Link>
            </div>
          </div>
          <div className="container my-4">
  <div className="row">
    <div className="col-md-6 offset-md-1">
      {/* Offer Section */}
      <div className="offer-section text-center py-3">
        <h2 className="font-weight-bold">Зарабатывайте больше на ежедневных тратакс вместе с нами</h2>
        <p>Увеличьте вознаграждение по своей кредитной карте, возврат денег и преимущества уже сегодня.</p>
      </div>
    </div>
  </div>
</div>

<div className="container my-4">
  <div className="row justify-content-center">
    <div className="col-lg-10">
      {/* Rounded Bordered Box */}
      <div className="rounded-box bg-white p-3 border rounded shadow" style={{ borderRadius: '24px' }}>
        {/* Header Text */}
        <h2 className="mt-4 ml-4">Привет! Давайте определимся, что вы хотите купить?</h2>
        {/* Search Panel */}
        <div className="d-flex align-items-center mt-3 ml-4">
          <input type="text" className="form-control rounded-pill" placeholder="Введите запрос..." />
          <Link to="/add-card">
          <button className="btn btn-success rounded-pill ml-2">Найти</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

          <div className="container my-4">
            {/* Section Title */}
            {/* Cards Row */}
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Analyzed</h5>
                    <p className="card-text">
                      <strong>5+</strong><br />
                      largest marketplace
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Analyzed</h5>
                    <p className="card-text">
                      <strong>5+</strong><br />
                      largest marketplace
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-md-4 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Analyzed</h5>
                    <p className="card-text">
                      <strong>5+</strong><br />
                      largest marketplace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-4">  
</div>

<div className="offer-container">
        <h2 className="text-center">Найдите лучшую карту по категориям</h2>
        <div className="button-container">
          <button className="category-btn">Красота</button>
          <button className="category-btn">Развлечение</button>
          <button className="category-btn">Путешествие</button>
          <button className="category-btn">Доставка Еды</button>
          <button className="category-btn">Супермаркеты</button>
        </div>
        <div className="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Halyk_Bank.svg/640px-Halyk_Bank.svg.png" alt="Halyk.kz" className="imageBanks" />
          <img src="https://zaimtime.kz/sites/default/files/2019-05/bcc.png" alt="CenterCredit" className="imageBanks" />
          <img src="https://main.storage-object.pscloud.io/fortebank_logotype_PNG_de167fbcfe.png" alt="ForteBank" className="imageBanks" />
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {/* Image and Header */}
          <div className="col-md-6">
            <div className="image-container">
              <img src={imageOfMain} alt="Credit Cards" className="credit-cards-image" />
            </div>
          </div>
          {/* Function Descriptions */}
          <div className="col-md-5">
            <p className="main-description">Откройте для себя наши обширные финансовые функции, тщательно разработанные для легкого удовлетворения ваших потребностей.</p>
            <div className="function-instance">
              <h3>Функция A</h3>
              <p>Откройте для себя наши обширные финансовые функции, тщательно разработанные для легкого удовлетворения ваших потребностей.</p>
            </div>
            <div className="function-instance">
              <h3>Функция B</h3>
              <p>Откройте для себя наши обширные финансовые функции, тщательно разработанные для легкого удовлетворения ваших потребностей.</p>
            </div>
            <div className="function-instance">
              <h3>Функция C</h3>
              <p>Откройте для себя наши обширные финансовые функции, тщательно разработанные для легкого удовлетворения ваших потребностей.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>Команда</h2>
          </div>
        </div>
        <div className="row text-center">
          {/* Repeated for each team member */}
          {['Daniyar', 'Zhibek', 'Abay', 'Alim'].map((name, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="team-member-card">
                {/* Image Placeholder */}
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team Member" className="image-placeholder" />
                {/* Name Tag */}
                <div className="name-tag bg-success text-white">
                  <h5>{name}</h5>
                  <p>Position</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      );
    }
  };

export default Landing;