
import { USER } from '../../Data/Data';
import { Reels } from '@sayings/react-reels'
import '@sayings/react-reels/dist/index.css'
const ReelsComponent = () => {

    return (
        <div>
            <Reels
                reels={USER?.flatMap((i) => i.REELS)}
                // reelMetaInfo={reelMetaInfo}
                onMenuItemClicked={(event:DOMException) => {
                    console.log('onMenuItemClicked',event)
                    // other actions
                    
                }}
                onLikeClicked={(reel) => {
                    console.log('onLikeClicked',reel) // current Reel Data
                    // other actions
                }}
                onDislikeClicked={(reel) => console.log('onDislikeClicked',reel)}
                onCommentClicked={(reel) => console.log('onCommentClicked',reel)}
                onShareClicked={(reel) => console.log('onShareClicked',reel)}
                onAvatarClicked={(reel) => console.log('onAvatarClicked',reel)}
                
            />
        </div>
    )
}

export default ReelsComponent