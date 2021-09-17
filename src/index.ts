import sum from './sum';
class Root {
    log = ({ message }: { message: string }) => {
        console.log(message);
    };
}

window.customProperty = false;
console.log(window.customProperty);

export { Root, sum };
