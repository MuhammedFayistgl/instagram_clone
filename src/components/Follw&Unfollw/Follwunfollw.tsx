import { useState } from "react";
import { Button } from "rsuite";

const Follwunfollw = () => {
    const [action, setAction] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <h5 className="text-blue-500">
                <Button
                    onClick={() => setAction(!action)}
                    loading={loading}
                    appearance="link">
                    {action ? "following" : "Follow"}
                </Button>
            </h5>
        </div>
    );
};

export default Follwunfollw;
