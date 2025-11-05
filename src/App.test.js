import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders React website title', () => {
  render(<App />);
  const titleElement = screen.getByText(/React.js Website with GitHub Actions/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders current time section', () => {
  render(<App />);
  const timeSection = screen.getByText(/Current Time/i);
  expect(timeSection).toBeInTheDocument();
});

test('counter functionality works', () => {
  render(<App />);
  
  const counterValue = screen.getByText('0');
  const incrementButton = screen.getByText('+');
  const decrementButton = screen.getByText('-');
  const resetButton = screen.getByText('Reset');
  
  expect(counterValue).toBeInTheDocument();
  
  // Test increment
  fireEvent.click(incrementButton);
  expect(screen.getByText('1')).toBeInTheDocument();
  
  // Test decrement
  fireEvent.click(decrementButton);
  expect(screen.getByText('0')).toBeInTheDocument();
  
  // Test increment multiple times then reset
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  expect(screen.getByText('3')).toBeInTheDocument();
  
  fireEvent.click(resetButton);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('renders features list', () => {
  render(<App />);
  const featuresTitle = screen.getByText(/Features/i);
  expect(featuresTitle).toBeInTheDocument();
  
  const reactFeature = screen.getByText(/Built with React.js/i);
  expect(reactFeature).toBeInTheDocument();
});

test('renders links section', () => {
  render(<App />);
  const linksTitle = screen.getByText(/Links/i);
  expect(linksTitle).toBeInTheDocument();
  
  const sourceCodeLink = screen.getByText(/View Source Code/i);
  const learnReactLink = screen.getByText(/Learn React/i);
  
  expect(sourceCodeLink).toBeInTheDocument();
  expect(learnReactLink).toBeInTheDocument();
});