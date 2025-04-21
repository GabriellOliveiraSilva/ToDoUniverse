// notificationSucess.js ou wherever

import { toast } from "react-hot-toast";

export const notificationSucess = (message = 'Notificação personalizada!') => {
  return toast.custom((t) => (
<div
  className={`transition-all duration-300 ease-in-out transform ${
    t.visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
  } max-w-sm w-full bg-blackOlive text-white shadow-lg rounded-lg pointer-events-auto flex p-4 border border-amber-400`}
>
      <div className="flex-1 w-0">
        <p className="text-sm font-medium color-greenOlive">{message}</p>
      </div>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-4 color-greenOlive cursor-pointer "
      >
        ✕
      </button>
    </div>
  ), {duration: 2000});
};

export const notificationAlert = (message = 'Notificação personalizada!') => {
    return toast.custom((t) => (
<div
  className={`transition-all duration-300 ease-in-out transform ${
    t.visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
  } max-w-sm w-full bg-blackOlive text-white shadow-lg rounded-lg pointer-events-auto flex p-4 border border-amber-400`}
>

        <div className="flex-1 w-0">
          <p className="text-sm font-medium text-amber-400">{message}</p>
        </div>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-4 color-amber-400 cursor-pointer text-amber-400 "
        >
          ✕
        </button>
      </div>
    ));
  };
  