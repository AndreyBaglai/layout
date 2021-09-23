import React from 'react';

import Button from 'components/Button';

const App = () => {
  const onClick = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae in eius, quas dolores
        non esse, eaque minus accusantium totam, explicabo impedit suscipit asperiores quasi modi
        commodi cupiditate? Velit, accusamus illo?
      </p>
      <button onClick={onClick}>Switch theme</button>
      <Button>Shop</Button>
    </div>
  );
};

export default App;
