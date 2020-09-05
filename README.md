# Work
#
#
# Git convention
#    
##Branching
    1) master → prod
    2) dev → working space
    3) feat/nameFeat → new functionnality
    4) release → correction bug relative to feat
    5) hotFix → correction bug relative to master
    
##    
## Commit ( use gitmoji for emoji)

    <Type> (range) : topic
        description

    Type: 
    
        feat    
             :sparkles: → New feature
             :construction: → Work in progress(WIP)
             :bug: → Fix a bug
             :poop: → write bad code that needs to be improved   
             :boom: → Introduce braking changes
             
             
        UI
            :lipstick: → Add or update the UI and style files
            :dizzy: → Add or update animations and transitions.
            :iphone: → Work on responsive
          
          
        build
            :ambulance: → Critical hotfix
            :rocket: → Deploy stuff.
            :heavy_plus_sign: → Add dependency
            :heavy_minus_sign: → Remove dependecy
            :wrench: → Add || update config files
            
            
        refacto
            :recycle: → Refactore code
            :label: → Add or update types (TypeScript)
            :art: → Improve structure / format of the code
            :fire: → Remove code or files
            :truck: → Add or rename ressources(files,paths,routes,..)
            
            
        docs
            :pencil: → Write docs
            
            
        git
            :twisted_rightwards_arrows: → Merge branch