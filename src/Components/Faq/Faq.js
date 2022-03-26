import React from 'react';

const Faq = () => {
    return (
        <div className='container p-5'>
          <h1 class="text-capitalize text-center color-black my-5">
                    Frequently  Asked <span class="color-orange"> Questions</span>
            </h1>
            <div className='row mt-5 pb-5'>
              <div className='col-md'>
              <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How  React Works?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>React is a Flexible, Efficient, Open-Source JavaScript Library.</strong> Its main purpose is to develop front-end. Components can be created with React. The simple definition of Components is Components is a small and isolated piece of code. A React Components can be used in more than one place. <br/>
      <strong>Some features of React :</strong> <br/>
      1.Reusable Components. This means that a components can be used as many times as desired.<br/>
      2. Load Fast since many codes contain only one component and that component is used over and over again, the codes are loaded faster. And this is the reason why the website loads too fast.<br/>
      3.External plugins bringing different types of JS plugins from different places and keeping them inside the components is very easy to use.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What is the difference between props and state ?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Props :</strong> React is a one-way data transfer library.In React, the data of Props is transferred in unidirectional way. That is, data is transferred from parent components to child components. And Props are called Read Only. Because if you send props to any component, the value of that props cannot be changed. <br/>
        <strong>For Example:</strong> <br />
        1.Props are Read-Only. <br />
        2.Props Can not be modified. 
        <br />
        <br />

        <strong>State :</strong>Two variables of states are declared. The value is accepted with the first of them. And the value is set by the second hour. The first variable is called Reducer State and the second variable is called Reducer Action. State is Immutable. It works in an asynchronous way. <br />
        <strong>For Example:</strong> <br />
        1.State changes can be Asynchronous. <br />
        2.State can be modified using this.setState <br />
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
        </div>
    );
};

export default Faq;