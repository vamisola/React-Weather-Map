var React = require('react');
var {Link} = require('react-router');
var Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Melbourne>'>Melbourne, Aus</Link>
        </li>
        <li>
          <Link to='/?location=Manila>'>Manila, Ph</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
