type FallbackProps = {
    error: Error;
};

export default function Fallback({error}: FallbackProps) {
  return(
    <div className="alert-container">
      <div>
        <p>Something went wrong:</p>
        <pre className="message">{error.message}</pre>
      </div>
    </div>
  );
}
