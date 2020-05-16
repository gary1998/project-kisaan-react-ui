set +x
BLUE='\033[0;34m'
GREEN='\033[0;32m'
NC='\033[0m'
echo -e "${BLUE}Releasing new build `date`${NC}"
printf '%20s\n' | tr ' ' -
echo -e "${GREEN}Adding new files...${NC}"
git add -A .
printf '%20s\n' | tr ' ' -
echo -e "${GREEN}Commiting changes...${NC}"
git commit -m $1
printf '%20s\n' | tr ' ' -
echo -e "${GREEN}Pushing to GitHub...${NC}"
git push -u origin master
printf '%20s\n' | tr ' ' -