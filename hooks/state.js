class Example extends Component {
  state = {
    count: 0
  }

  constructor(props) {
    super(props)
    this.incrementCount = this.incrementCount.bind(this)
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.incrementCount}>
          Click me
        </button>
      </div>
    )
  }
}
