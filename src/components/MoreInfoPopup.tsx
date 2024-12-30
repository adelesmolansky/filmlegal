export type PopupContent = {
  title: string;
  description?: string;
  services?: string[];
};

type MoreInfoPopupProps = {
  content: PopupContent;
  setContent: (content: PopupContent | null) => void;
};

const MoreInfoPopup = ({ content, setContent }: MoreInfoPopupProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg relative">
      <button
        className="absolute top-2 right-4 text-gray-900 hover:text-gray-600 text-3xl"
        onClick={() => setContent(null)}
      >
        &times;
      </button>
      <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
      {content.description && <p>{content.description}</p>}
      {content.services && content.services.length > 0 && (
        <ul className="mt-4">
          {content.services?.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default MoreInfoPopup;
